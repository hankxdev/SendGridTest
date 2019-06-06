const fromIpt = $("#from")
const toIpt = $("#to")
const keyIpt = $("#apikey")
const subjectIpt = $("#subject")
const tmpltTxt = $("#template")
const submitBtn = $("#submit")


function init() {
  fromIpt.val(ls("from"))
  toIpt.val(ls("to"))
  keyIpt.val(ls("apikey"))
  subjectIpt.val(ls("subject"))
  tmpltTxt.val(ls("template"))
}

$("body").on("keyup", function () {
  saveForm()
})

submitBtn.click(function () {
  let that = $(this)
  const form = getValues()
  if (!form.template || !form.subject || !form.from || !form.apikey || !form.to) {
    a("Everything is needed, please input", "error")
    return
  }
  
  let to = form.to.split(",")
  let tos = to.map(t => {
    return {
      email: t,
      name: t.replace(/@.*/gi, "")
    }
  })
  
  if (tos.length > 1){
    asyncForEach(tos, async to=>{
      await sendEmail(form, [to], that)
    })
  }else{
    sendEmail(form, tos, that)
  }
  that.addClass("is-loading")
})

async function asyncForEach(arr, callback) {
  const arrLen = arr.length
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arrLen; i++) {
    // eslint-disable-next-line no-await-in-loop
    await callback(arr[i], i, arr)
  }
}

function sendEmail(form, to, el) {
  const data = {
    from: {
      name: form.from.replace(/@.*/g, ""),
      email: form.from,
    },
    subject: form.subject,
    content: [
      {
        type: "text/html",
        value: form.template
      }
    ],
    personalizations: [
      {
        to: to
      }
    ]
  }
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://api.sendgrid.com/v3/mail/send",
      headers: {
        "Authorization": `Bearer ${form.apikey}`
      },
      contentType: "application/json",
      method: "POST",
      data: JSON.stringify(data),
      success: () => {
        resolve(true)
        el.removeClass("is-loading")
        a("email sent", "success")
      },
      error: (e) => {
        reject(e)
        el.removeClass("is-loading")
        a("could not send your email, please check, maybe api key is not correct", "error")
      },
    })
  })
}


function saveForm() {
  const form = getValues()
  lsave("from", form.from)
  lsave("to", form.to)
  lsave("apikey", form.apikey)
  lsave("subject", form.subject)
  lsave("template", form.template)
}

function getValues() {
  const from = cleanTxt(fromIpt)
  const to = cleanTxt(toIpt)
  const apikey = cleanTxt(keyIpt)
  const subject = cleanTxt(subjectIpt)
  const template = cleanTxt(tmpltTxt)
  return {
    from, to, apikey, subject, template
  }
}


function cleanTxt(el) {
  return el.val().trim()
}

function ls(name) {
  return localStorage.getItem(name)
}

function lsave(name, value) {
  localStorage[name] = value
}

function a(html, type) {
  Swal.fire({
    html,
    type
  })
}

init()
