class ToDoList{
    constructor(){
        this.toDoButton = createButton('To-Do List');

        this.greeting = createElement('h4');
        this.saveButton = createButton("Save To-Do");
        this.deleteButton = createButton("Delete All");
        this.dateInput = createInput("DD/MM/YY")
        this.input = createInput("Enter what to do here");
        this.greeting2 = createElement('h5');

        this.dateInput1 = createInput("DD/MM/YY")
        this.input1 = createInput("Enter what to do here");
        
        //this.dateInputList = [];
        this.dateInputList = [];
        this.inputList = [];
    }

    display(){
        this.toDoButton.position(displayWidth/2 + 76, displayHeight/2 + 200);

        this.toDoButton.mousePressed(()=>{
            this.toDoButton.hide();
            //image(toDoImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
            image(toDoImage, displayWidth/4  +100 ,displayHeight - displayHeight, displayWidth - 800, displayHeight - 150);

            this.greeting.html("Enter any things you want to be reminded about here!");
            this.greeting.position(displayWidth/2 - 120, displayHeight/4 - 150);

            console.log("inside display func");
            this.saveButton.position(displayWidth/2 - 40, displayHeight/2 +140);
            this.dateInput.position(displayWidth/2 - 135, 140);
            this.input.position(displayWidth/2 + 40, 140)
            
            this.greeting.show();
            this.saveButton.show();
            this.dateInput.show();
            this.input.show();
            syllabusPage.hide();
            syllabusPage.show();
            
            reminderPage.hide();
            reminderPage.show();
            
            breakPage.hide();
            breakPage.show();
         
            

            this.saveButton.mousePressed(()=>{
                if(y<540){
 
                    mouseNo = mouseNo + 1;
                    //this.dateInput1 = createInput("DD/MM/YY")
                    this.dateInput1.position(displayWidth/2 - 135, y);
                    //this.input1 = createInput("Enter what to do here");
                    this.input1.position(displayWidth/2 + 40, y);
                    
                    //this.dateInputList.push(dateInput1);
                    //append(this.dateInputList, this.dateInput1);
                    this.dateInputList.push(this.dateInput1);
                    this.inputList.push(this.input1);

                    this.dateInput1.show()
                    this.input1.show();

                 y = y + 40;
                }
                else{
                    this.greeting2.html("Please add only 10 things to do at one time!")
                    this.greeting2.position(displayWidth/2 - 80, displayHeight/2 + 80);
                    this.greeting2.show();
                }
            });    
        }) 
    }

    hide(){
        //this.greeting.hide();
        this.saveButton.hide();
        this.deleteButton.hide();
        this.dateInput.hide();
        this.input.hide();
        //this.input1.hide();
        //this.dateInputList.hide();

        //ADDED - 29
        /*
        for(var hi=0 ; hi<=mouseNo ; hi=hi+1){
            var temporary = this.dateInputList[hi];
            var temp2 = this.inputList[hi];
            temp2.hide();
            temporary.hide();
            console.log("in the for loop - HIDE");
        }
        */


        this.greeting.hide();
        this.greeting2.hide();
    }

    show(){
        this.toDoButton.show();
        //this.dateInputList.hide();
    }
    
}