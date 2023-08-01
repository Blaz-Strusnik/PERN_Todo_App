import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Task extends Model {
  public id!: number;
  public title!: string;
  public description?: string;
  public dueDate?: Date;
  public isCompleted!: boolean;
}

Task.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Task',
  }
);

export default Task;
