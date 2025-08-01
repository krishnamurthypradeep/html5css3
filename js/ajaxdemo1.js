class HttpClient{
  get = async (url,id) => {
    const finalUrl = id ? `${url}/${id}` : url;
    return await fetch(finalUrl, {
      method: 'GET',
    })
  }
}
const main = async () => {
  const httpClient = new HttpClient()
 const response = await httpClient.get(`http://jsonplaceholder.typicode.com/users`,1);
const data = await response.json();
console.log(data);
}

main()
console.log(`After The Main`)
