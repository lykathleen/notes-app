const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks();

describe('Notes Api Class', () => {
  it('calls fetch and loads list of notes', async () => {
    const notesApi = new NotesApi();
    fetch.mockResponse(JSON.stringify({
      0: 'Hi friends'
    }));

    notesApi.loadNotes((notes) => {
      expect(notes[0]).toEqual('Hi friends')
    })
  });
})