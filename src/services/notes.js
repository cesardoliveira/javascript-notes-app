import Api from './api';

const NotesService = {
    index: () => Api.get('/notes', {
        headers: { 'token': localStorage.getItem('token') }
    }),
    create: () => Api.post('/notes', {'title': 'New note', 'body': 'Editing note...'}, {
        headers: { 'token': localStorage.getItem('token') }
    })
}

export default NotesService;