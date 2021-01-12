import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HousesService {
  async getAll(query = {}) {
    return await dbContext.Houses.find(query)
  }
  async getOne(req) {
    let findOne = await dbContext.Houses.findById(req.params.id)
    if (!findOne) {
      throw new BadRequest("ERROR 404 HOUSE DOES NOT EXIST AND THEREFORE CANNOT BE RETRIEVED")
    }
    return findOne
  }
  async create(req) {
    await dbContext.Houses.create(req.body)
    return await dbContext.Houses.find({})
  }
  async edit(req) {
    let editHouse = await dbContext.Houses.findByIdAndUpdate(req.params.id, req.body)
    if (!editHouse) {
      throw new BadRequest("ERROR 404 HOUSE DOES NOT EXIST AND THEREFORE CANNOT BE EDITED")
    }
    return await dbContext.Houses.find({})
  }
  async delete(req) {
    let deleteHouse = await dbContext.Houses.findByIdAndDelete(req.params.id)
    if (!deleteHouse) {
      throw new BadRequest("ERROR 404 HOUSE DOES NOT EXIST AND THEREFORE CANNOT BE DELETED")
    }
    return await dbContext.Houses.find({})
  }

}

export const housesService = new HousesService() 