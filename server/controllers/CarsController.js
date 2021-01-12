// @ts-nocheck
import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController";


export class CarsController extends BaseController {
  constructor() {
    super("api/cars")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await carsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
  async getOne(req, res, next) {
    try {
      res.send(await carsService.getOne(req))
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      res.send(await carsService.create(req))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      res.send(await carsService.edit(req))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await carsService.delete(req))
    } catch (error) {
      next(error)
    }
  }
}
