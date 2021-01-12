import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class CarsService {
  async getAll(query = {}) {
    return await dbContext.Cars.find(query)
  }

  async getOne(req) {
    let newCar = await dbContext.Cars.findById(req.params.id)
    if (!newCar) {
      throw new BadRequest("Car does not exist")
    }
    return newCar
  }

  async create(req) {
    await dbContext.Cars.create(req.body)
    return dbContext.Cars.find({})
  }
  async edit(req) {
    let editCar = await dbContext.Cars.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!editCar) {
      throw new BadRequest("Car can not be edited as it does not exist")
    }
    return dbContext.Cars.find({})
  }
  async delete(req) {
    let deleteCar = await dbContext.Cars.findByIdAndDelete(req.params.id)
    if (!deleteCar) {
      throw new BadRequest("Car can not be deleted as it does not exist already")
    }
    return dbContext.Cars.find({})
  }
}
export const carsService = new CarsService()