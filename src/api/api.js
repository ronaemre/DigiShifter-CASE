import axios from "axios";

export const getMaterials = async (setMaterials) => {
    const response = await axios.get(`http://localhost:3002/materials`)
    setMaterials(response.data)
    return response;
}

export async function addMaterial(numbers, details, tedarikci, weight, status, registerdate, updatedate, setMaterials) {
    if (numbers == "" || details == "" || tedarikci == "" || weight == "" || registerdate == "") {
        return
    }
    await axios.post(`http://localhost:3002/materials`, {
        numbers,
        details,
        tedarikci,
        weight,
        status,
        registerdate,
        updatedate
    });
    getMaterials(setMaterials)
}

export const updateMaterial = async (numbers, details, tedarikci, weight, status, e, registerdate, updatedate, product, setMaterials) => {
    e.preventDefault();
    try {
        const body = { numbers, details, tedarikci, weight, status, registerdate, updatedate };

        await fetch(
            `http://localhost:3002/materials/${product.id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            }
        );
        getMaterials(setMaterials)
    } catch (err) {
        console.error(err.message);
    }
};

export const deleteMaterial = async (id, setMaterials) => {
    const response = await axios.delete(`http://localhost:3002/materials/${id}`)
    getMaterials(setMaterials)
    return response;
}