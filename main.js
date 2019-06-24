let hob = 1;
let skil = 1;
function addHobby(par)
{
    par = par.parentNode;
    let inp = document.createElement("input");
    inp.type = "text";
    inp.name = "hobby" + hob;
    hob++;
    par.lastElementChild.insertAdjacentElement("afterend",inp);
    par.lastElementChild.insertAdjacentElement("afterend",document.createElement("br"));
}
function addSkill(par)
{
    par = par.parentNode;
    let inp = document.createElement("input");
    inp.type = "text";
    inp.name = "skill" + skil;
    skil++;
    par.lastElementChild.insertAdjacentElement("afterend",inp);
    par.lastElementChild.insertAdjacentElement("afterend",document.createElement("br"));
}
