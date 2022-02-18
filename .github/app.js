customerList = []

function AddUser(){
    const inputName = document.getElementById("name").value
    const inputBalance = document.getElementById("balance").value
    
    if(!inputName || !inputBalance) { //alanlar girilmemiş ise
        console.log("Lütfen alanları doldurun")
        return false
    }

    customerList.push({
        id: String(Math.round(Math.random() * 10000)),
        name: inputName,
        balance: inputBalance
    }) 

    console.log(customerList);
    
    senderOption();
    recipientOption();
    addName_Balance();
}

function senderOption(){ // Eklenen kullanıcı bilgilerinin sender kısmına gönderilmesi
  
    const sender = document.getElementById("sender"); // id sender olan kullanıcıya göndereceğiz

    customerList.forEach(function(element){ // listedeki her bir elemandan alınması

        const newSender = document.createElement("option") // optin tipinde ekleme yapılacak
        newSender.innerText = `${element.name}` // option içine kullanıcın adının eklenmesi
        newSender.setAttribute('data-id',element.id) // option içinde kullanıcın idsi tutulması
        sender.appendChild(newSender); // yeni kullanıcın eklenmesi
    })

}

function recipientOption(customerName){
    const recipient = document.getElementById("recipient")

    customerList.forEach(function(element){
        const newRecipient = document.createElement("option")
        newRecipient.innerText = `${element.name}`
        newRecipient.setAttribute('data-id',element.id)
        recipient.appendChild(newRecipient)
    })
}

function addName_Balance(){
    const mainUl = document.getElementById("namebalance");

    customerList.forEach(function(element){
        const newLi = document.createElement("li");
        const newDiv = document.createElement("div");
        newDiv.innerText = element.name;
        const newBalanceSpan  = document.createElement("span");
        newBalanceSpan.innerText = element.balance;

        newLi.appendChild(newDiv);
        newLi.appendChild(newBalanceSpan);
        mainUl.appendChild(newLi);

    })
}