import command from '../../config.json' assert {type: 'json'};

const createProject = () : string[] => {
  let string = "";
  
  const projects : string[] = [];
  

  const SPACE = "&nbsp;";

  projects.push("<br>")
//   projects.push("Here is an overview of some of my projects domain-wise")
//   projects.push("do <span class = 'command'>p/[project name]</span> to get more details about the project")
//   projects.push("<br>")

//   projects.push("---> <span class='domainname'>WEB DEV</span>")
//   projects.push("<br>")
  
  command.achievements.big.forEach((ele) => {
    let link = `<span class = 'projectname'>${ele[0]}</span>`
    // string += SPACE.repeat(1);
    string += link;
    string += SPACE.repeat(25 - ele[0].length);
    string += "by: <span class = 'by'>";
    string += ele[2];
    string += "</span>";
    projects.push(string);
    projects.push(ele[1]);
    projects.push("<br>");
    projects.push(ele[5]);
    projects.push(ele[6]);
    projects.push(ele[7]);
    projects.push(ele[8]);
    projects.push(ele[9]);
    projects.push(ele[10]);
    projects.push("<br>");
    projects.push(ele[11]);
    projects.push(ele[12]);
    projects.push(ele[13]);
    projects.push("<br>");
    projects.push("Linkedin post: ");
    projects.push("<a target='_blank' href='${command.a}'>${command.social.github}</a>");
    projects.push("<br>");
    projects.push(ele[4]);
    projects.push(ele[14]);
    
    projects.push("<br>");
    projects.push("<br>");


    
    string = '';
    
    });

  // projects.push("<br>");
  
  projects.push("<br>");


  return projects
}

export const ACHIEVEMENTS = createProject()
