import request from "superagent";


const URL = 'http://localhost:3000';
// const URL = 'https://murmuring-hollows-82372.herokuapp.com';

export async function getAllPlants() { 

    const response = await request.get(`${URL}/plants`);
     
    console.log(response.body);
    return response.body;

};

export async function getOnePlant(id) { 

    const response = await request.get(`${URL}/plants/${id}`);

    return response.body;

};

export async function getAllSizes() { 

    const response = await request.get(`${URL}/sizes`);

    return response.body;
}

export async function postNewPlant(onePlant) { 

    const response = await request.post(`${URL}/plants`)

        .send(onePlant);

    return response.body;
}

export async function deleteAPlant(id) { 

    const response = await request.delete(`${URL}/plants/${id}`);

    return response.body;
}

export async function updateAPlant(id, onePlant) { 
    
    const response = await request.put(`${URL}/plants/${id}`)
        .send(onePlant);

    return response.body;
}
