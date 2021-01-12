import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class JobsService {
  async getAll(query = {}) {
    return await dbContext.Jobs.find(query)
  }
  async getOne(req) {
    let findOne = await dbContext.Jobs.findById(req.params.id)
    if (!findOne) {
      throw new BadRequest("Could not find job")
    }
    return findOne
  }
  async create(req) {
    await dbContext.Jobs.create(req.body)
    return await dbContext.Jobs.find({})
  }
  async edit(req) {
    let editJob = await dbContext.Jobs.findByIdAndUpdate(req.params.id, req.body)
    if (!editJob) {
      throw new BadRequest("That job does not exist")
    }
    return await dbContext.Jobs.find({})
  }
  async delete(req) {
    let deleteJob = await dbContext.Jobs.findByIdAndDelete(req.params.id)
    if (!deleteJob) {
      throw new BadRequest("Cannot delete as that job does not exist already")
    }
    return await dbContext.Jobs.find({})
  }

}

export const jobsService = new JobsService() 