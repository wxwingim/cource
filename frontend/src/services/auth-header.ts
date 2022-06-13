export default function authHeader() : any {

    const token = JSON.parse(localStorage.getItem('token') || '{}');

    if (token) {
      return { Authorization: 'Bearer ' + token };
    } else {
      console.log('noToken in authHeader')
      return {};
    }

}
  