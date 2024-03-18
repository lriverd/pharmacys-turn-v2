
import { Pharmacy } from '../models/pharmacy.model'

const pharmacyHost = import.meta.env.PHARMACY_API_HOST

export const fetchPharmacies = async (city: string): Promise<Pharmacy[]> => {
    const response = await fetch(`${pharmacyHost}/farmacias?ciudad=${city}`)
    const data = await response.json()
    return data
}