window.onload = function(e){
    function addTask(){
        var task = [
            {
                name: document.getElementById("taskName").value,
                desc: document.getElementById("taskDesc").value,
                date: document.getElementById("taskDate").value,
            }
        ];
        // alert(task[0].name);
        var container = document.createElement("div");
        container.innerHTML = task[length].name + task[length].desc + task[length].date;
        document.getElementById("dest").appendChild(container);
    }

    document.getElementsByTagName("button")[0].onclick = function(){
        addTask();
    };
};