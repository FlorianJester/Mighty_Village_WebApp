class DataStorage {

    // hier vll JSON.stringify(); verwenden? sollte fürs Object speichern gut funktionieren laut dem Internetz;

    dataArray  = new Array();

    //Implementierung folgt

    saveData() {
        document.cookie = JSON.stringify(this.dataArray);
    }

    loadData() {
        let x = JSON.parse(document.cookie);
    }

    collectData(data) {
        this.dataArray.push(data);
    }

}