const addEntries = () => {
    const addEntryForm = document.querySelector('[data-js="add-entry"]');
    const entryContainer = document.querySelector('[data-js="new-entries"]');

    addEntryForm?.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        if(!data.question || !data.answer || !data.tags) {
            event.target.elements.question.focus();
            return;
        }

        console.log(data);
        addCard(data.question, data.answer, data.tags );
        addEntryForm.reset();
        event.target.elements.question.focus();
    });

    const addCard = (question, answer, tag ) => {
        const newCard = document.createElement("article");
        newCard.classList.add('card');

        const cardHeader = document.createElement("header");
        cardHeader.classList.add('card-header');
        cardHeader.textContent = "This is a new Question";

        const cardQuestion = document.createElement("div");
        cardQuestion.classList.add('card-content-question');
        cardQuestion.textContent = question;

        const cardAnswer = document.createElement('div');
        cardAnswer.classList.add('card-content-answer');
        cardAnswer.textContent = answer;

        const cardFooter = document.createElement('footer');
        cardFooter.classList.add('card-footer');

        const tagItems = document.createElement('span');
        tagItems.classList.add('key-items');
        tagItems.textContent = tag;


        newCard.append(cardHeader);
        newCard.append(cardQuestion);
        newCard.append(cardAnswer);
        newCard.append(cardFooter);
        cardFooter.append(tagItems);

        entryContainer.append(newCard);
    }
}

export {addEntries};