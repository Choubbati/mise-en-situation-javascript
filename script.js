let storageUtilisateur = [
    {
        userName: "chouaib",
        userEmail: "choubbati@gmail.com",
        userAge: 30
    }
]
let count =0
let toast = document.getElementById("emptyMessage")
let tableContainer = document.getElementById("tableContainer")
toast.style.display='none'


storageUtilisateur = JSON.parse(localStorage.setItem('utilisateur')) || [] 



function afficher() {
    const utilisateurList = document.getElementById("userTableBody")
    utilisateurList.innerHTML=""

    storageUtilisateur.forEach(storageUtilisateur => {
        let tab = document.createElement("tr")
        tab.innerHTML = `
        <tr>
            <td>
                <span class="user-name" data-bs-toggle="modal" data-bs-target="#userDetailModal">
                    ${storageUtilisateur.userName}
                </span>
            </td>
                <td>${storageUtilisateur.userEmail}</td>
                <td>${storageUtilisateur.userAge}</td>
            <td>
                <button class="btn btn-sm btn-danger w-100">Supprimer</button>
            </td>
        </tr>

        `

    }),utilisateurList.appendChild(tab)

}



function ajouterUtilisateur(p) {
    p.preventDefault()

    const forma = document.getElementById("userForm")
    forma.innerHTML=''
    const tab={
        id:Date().New(),
        userName: document.getElementById("userName").value,
        userEmail: document.getElementById("userEmail").value,
        userAge: document.getElementById("userAge").value
    }
    storageUtilisateur.push(tab)
    storageUtilisateur = localStorage.setItem(JSON.stringify("utilisateur")) || []
    count++
    tableContainer.style.display='flex'
    tableContainer.style.display='none'

    afficher()
}



