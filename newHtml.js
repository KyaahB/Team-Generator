
const newHTML = require('./index.js')

// // const employees = newHtml({
//     title: 'My Team'
//   })

  const renderEmployeeCard = (employee) => {
    return `<div class="card m-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
      <p class="card-text">ID: ${employee.getId()}</p>
      <p class="card-text">Email: ${employee.getEmail()}</p>
      ${getLastInfo(employee)}
    </div>
  </div>`
  }

  const getLastInfo = (employee) => {
    if(employee.getRole() == 'Manager') {
        return `<p class="card-text">Office Number: ${employee.getOfficeNumber()}</p>`
    } else if(employee.getRole() == 'Engineer') {
      return `<p class="card-text">Github: ${employee.getGithub()}</p>`
    }  else if(employee.getRole() == 'Intern') {
      return `<p class="card-text">School: ${employee.getSchool()}</p>`
    } 
  }


  const createHTML = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
        <div class="container d-flex">
    
         ${data.map((employee) => {
          return renderEmployeeCard(employee)
         })}
            
              
        </div>
    </body>
    </html>`
  }

  // const createHTML = newHtml({
  //   title: 'My Team',
  //   script: 'team.js',
  //   scriptAsync: true,
  //   css: 'style.css',
  //   lang: 'en',
  //   head: '<meta name="description" content="example">',
  //   body: '<p>example</p>',
  // });

  


  module.exports = createHTML




