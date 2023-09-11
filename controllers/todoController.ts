import express, { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/errorHandler";
import todoModel from "../model/todoModel";


//**********************************Create Todo*********************************/

export const todoCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, status, dueDate } = req.body;

    if (!title || !description || !dueDate) {
      return next(new ErrorHandler("please enter all details", 401));
    }

    const todo = await todoModel.create({
      title: title,
      description: description,
      dueDate: dueDate,
      status: status,
    });

    res.status(200).json({
      message: "todo successfully created",
      todo,
    });
  } catch (error: any) {
    return next(new ErrorHandler(error, 401));
  }
};

//**********************************Get All Todo*********************************/

export const getAllTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await todoModel.find({});

    res.status(200).json({
      message: "success",
      todos,
    });
  } catch (error: any) {
    return next(new ErrorHandler(error, 401));
  }
};

//**********************************Get Todo By Id*********************************/

export const getTodoById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const todo = await todoModel.findOne({ _id: id });
    if (!todo) {
      return next(new ErrorHandler("todo not found", 200));
    }

    res.status(200).json({
      message: "success",
      todo,
    });
  } catch (error: any) {
    return next(new ErrorHandler(error, 401));
  }
};

//**********************************update Todo By *********************************/

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const { title, description, status, dueDate } = req.body;
    const todo = await todoModel.findOneAndUpdate(
      { _id: id },
      {
        title: title,
        description: description,
        dueDate: dueDate,
        status: status,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "success",
      todo,
    });
  } catch (error: any) {
    return next(new ErrorHandler(error, 401));
  }
};

//**********************************Delete By Id*********************************/

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const todo = await todoModel.findOneAndDelete({ _id: id });
    res.status(200).json({
      message: "successfully deleted",
      todo,
    });
  } catch (error: any) {
    return next(new ErrorHandler(error, 401));
  }
};
