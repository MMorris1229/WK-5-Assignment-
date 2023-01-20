//Organizer for grocery list

class Store {
    constructor(name) {  // Store takes a name
        this.name = name;  
        this.items = []; // empty array of items
    }

    addItem(item) {
        this.items.push(item); 
        // adding to my items array
    }

    describe() {
        return `${this.name} has ${this.items.length} items.`; 
        // describe returns a string that decribes the store and the number of items it has.
    }   
}    

class Menu { 
    constructor() {
        this.stores = []; // array of stores
        this.selectedStore = null; // property 
    }

    start() {
        let selection = this.showMainMenuOption();
        while (selection != 0) {
          switch (selection) {
            case '1':
               this.addStoreList();
              break;
            case '2':
               this.viewStoreList();
              break;
            case '3':
               this.deleteStoreList();
              break;
            case '4':
              this.displayStores();
              break;
            default:
                 selection = 0;
            }
          selection = this.showMainMenuOption();
        }  
        alert('Goodbye!');
     // this is my main menu, the loop continues until the user selects 0
    }

    showMainMenuOption() {
        return prompt(`
          0) Exit
          1) Add Store List
          2) View Store List
          3) Delete Store List
          4) Display Stores
        `);
        // this returns a string that shows the main menu optins to the user
    }

    showItemMenuOption(storeInfo){
        return prompt(`
          0) Back
          1) Add items
          2) Delete items
           ------------------
           ${storeInfo}
        `);
        // showItemMenuOptions takes storeInfo as an argument & returns a string that shows the item menu optins to the user
    }

    displayStores() {
        let storeString = '';
        for (let i = 0; i < this.stores.length; i++) {
           storeString += i + ')' + this.stores[i].name +'\n';
        }
        alert(storeString);
        //this code loops through the stores arrays & creates a string that lists the stores by index & name
    }
    addStoreList() {
        let name = prompt('Enter the store you would like to add:');
        this.stores.push( new Store(name));
        // prompts the user to enter the name of a store, creates a new store object with that name, then pushes it to the stores array
    }

    viewStoreList() {
        let index = prompt('View items selected by choosing store index:');
        if(index > -1 && index < this.stores.length){
            this.selectedStore = this.stores[index];
            let description = 'Store Name: ' + this.selectedStore.name + '\n';
            for (let i = 0; i < this.selectedStore.items.length; i++) {
                description += i + ') ' + this.selectedStore.items[i] + '\n';
               // this will propmt the user to select a store by index. It sets the selected store property to that store, loops through that stores array, creates a string that list the items by index & name, then prompts user to make a slection from menu

            }

            let selection = this.showItemMenuOption(description);
            switch (selection) {
                case '1':
                    this.createItem();
                  break;
                case '2':
                    this.deleteItem();
                   break;
                   // depeding on the above selection this is the create item or delete item method
            }
        }
    }
 
     deleteStoreList() {
        let index = prompt('Enter the number of the List you would like to delete:');
        if (index > -1 && index < this.stores.length) {
            this.stores.splice(index, 1);
            //prompts user to select a store by index they would like to delete, using the splice method this will remove the store from stores array.
        }
    }
     createItem() {
        let item = prompt('What would you like to add to your list?:');
        this.selectedStore.addItem(item);
        // prompts user to enter the name of an item , additem method of the selectedStore will add the item to the items array
    }
 
     deleteItem() {
        let index = prompt('Enter the number of the item you would like to delete:');
        if(index > -1 && index < this.selectedStore.items.length) {
            this.selectedStore.items.splice(index, 1);
            // prompts user to select an item by index, it removes that item from the items array of the selectedStore using the splice method
        }
    }
}
 
 let menu = new Menu();
 menu.start();
