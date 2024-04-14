import command from '../../config.json' assert {type: 'json'};

const createProject = () : string[] => {
  let string = "";
  const projects : string[] = [];
  const files = `${command.projects.webdev.length} File(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>")
  projects.push("Here is an overview of some of my projects domain-wise")
  projects.push("do p/[project name] to get more details about the project")
  projects.push("<br>")
  projects.push("---> <span class='domainname'>WEB DEV</span>")
  projects.push("<br>")
  
  command.projects.webdev.forEach((ele) => {
    let link = `<span class = 'projectname'>${ele[0]} </span>`
    string += SPACE.repeat(1);
    string += link;
    string += SPACE.repeat(16 - ele[0].length);
    string += ele[1];
    string += SPACE.repeat(20 - ele[1].length);
    string += ele[2];
    string += SPACE.repeat(20 - ele[2].length);
    string += ele[3];
    projects.push(string);
    string = '';
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");
  return projects
}

export const PROJECTS = createProject()
