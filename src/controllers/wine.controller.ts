import { Request, Response } from "express";
import wine from "../models/wine.model";
import mongoose from "mongoose";

export const getAllwines = async (req: Request, res: Response) => {
  try {
    const wines = await wine.find();
    res.status(200).json(wines);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getwinesByName = async (req: Request, res: Response) => {
  try {
    const wines = await wine.find({
      title: { $regex: new RegExp(".*" + req.params.name + ".*", "i") },
    });

    console.log(wines);
    res.status(200).json(wines);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletewineById = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id);

    const idToDelete = new mongoose.Types.ObjectId(req.params.id);

    console.log(idToDelete);

    const deleted = await wine.findOneAndDelete(idToDelete);

    console.log(deleted);
    res.status(200).json(deleted);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
