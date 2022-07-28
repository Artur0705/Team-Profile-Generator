function getManagerCard(Manager) {
    const name = Manager.getName();
  const id = Manager.getId();
  const email = Manager.getEmail();
  const officeNumber = Manager.officeNumber;

  return `
            <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header bg-primary text-white">
                        <h3>${name}</h3>
                        <h4>Manager</h4>
                        <i class="bi bi-cup-hot"></i>
                    </div>

                    <div class="card-body bg-light text text-dark">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">Office Number: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
`;
}

function getEngineerCard(Engineer) {
    const name = Engineer.getName();
    const id = Engineer.getId();
    const email = Engineer.getEmail();
    const github = Engineer.getGithub();
  
    return `
              <div class="col-4 mt-4">
                  <div class="card h-100">
                      <div class="card-header bg-primary text-white">
                          <h3>${name}</h3>
                          <h4>Engineer</h4>
                          <i class="bi bi-eyeglasses"></i>
                      </div>
  
                      <div class="card-body bg-light text text-dark">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${id}</li>
                              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                              <li class="list-group-item">Github: <a href="https://github.com/${github}">${github}</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
      `;
  }


  function getInternCard(Intern) {
    const name = Intern.getName();
    const id = Intern.getId();
    const email = Intern.getEmail();
    const school = Intern.getSchool();
  
    return `
              <div class="col-4 mt-4">
                  <div class="card h-100">
                      <div class="card-header bg-primary text-white">
                          <h3>${name}</h3>
                          <h4>Intern</h4>
                          <i class="bi bi-mortarboard-fill"></i>
                      </div>
  
                      <div class="card-body bg-light text text-dark">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${id}</li>
                              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                              <li class="list-group-item">School: ${school}</li>
                          </ul>
                      </div>
                  </div>
              </div>
      `;
  }
  
  function generateHtmlTemplate(teamProfileData) {
    let cards = ``;
    console.log(teamProfileData);
    teamProfileData.forEach((employee) => {
      console.log(employee.getRole(), employee.getName());
  
      switch (employee.getRole()) {
        case "Manager":
          cards += getManagerCard(employee);
          break;
        case "Engineer":
          cards += getEngineerCard(employee);
          break;
        case "Intern":
          cards += getInternCard(employee);
          break;
      }
    });

    return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile Generator</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      />
    </head>
    <body>
      <header>
        <nav class="navbar bg-danger">
          <div
            class="mb-0 h1 p-4 w-100 text-center text-light"
          >
            My team
          </div>
        </nav>
      </header>
      <main>
        <div class="container">
          <div class="row justify-content-center">
           ${cards}            
          </div>
        </div>
      </main>
    </body>
  </html>
   `;
}

module.exports = generateHtmlTemplate;

  