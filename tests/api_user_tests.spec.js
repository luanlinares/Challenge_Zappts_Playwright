import {test, expect} from '@playwright/test';

test ('API Get Users', async({request}) => {

    const response = await request.get('https://reqres.in/api/users?page=2')
    
    expect(response.status()).toBe(200)
    
    const text = await response.text();
    expect(text).toContain('Tobias')

    console.log(await response.json());
}) 

test ('API POST Create new User', async({request}) => {

    const response = await request.post('https://reqres.in/api/users', {
        data:{
            "name": "Luan Linares",
            "job": "QA Senior"
        }
    })
    
    expect(response.status()).toBe(201)
    
    const text = await response.text();
    expect(text).toContain('Luan')

    console.log(await response.json());
}) 

test ('API POST Create new User - Invalid URL', async({request}) => {

    const response = await request.post('https://reqres.in/api/', {
        data:{
            "name": "Luan Linares",
            "job": "QA Senior"
        }
    })
    
    expect(response.status()).toBe(404)
}) 