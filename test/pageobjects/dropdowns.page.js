import Page from './page';

class DropdownPage extends Page {
    /**
     * define selectors using getter methods
     */
     get getTitle() {
        return $('h3');
    }

    get getDropdown(){
        return $('#dropdown');
    }

    setDropdownValuebyIndex(index){
        return this.getDropdown.selectByIndex(index);
    }

    currentSelected(){
        return $('#dropdown option[selected="selected"]');
    }
}

export default new DropdownPage();