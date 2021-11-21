import Page from './page';

class InputPage extends Page {
    /**
     * define selectors using getter methods
     */
     get getTitle() {
        return $('h3');
    }

    get getParagraph() {
        return $('p');
    }

    get getNumberTextBox(){
        return $('input[type=number]');
    }

    addNumberManually(){
        return this.getNumberTextBox.setValue(5);
    }

    addNumberArrowUp(){
        return this.getNumberTextBox.setValue('{38}');
    }

    addNumberArrowUDown(){
        return this.getNumberTextBox.setValue('{40}');
    }
}

export default new InputPage();