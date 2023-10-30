import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import CustomButton from "./CustomButton";
import clsx from "clsx";

export interface ITask {
  id: string;
  title: string;
  state: "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";
}

interface TaskProps {
  task: ITask;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onArchiveTask, onPinTask }) => {
  return (
    <div
      className={clsx(
        "py-2 flex gap-4 items-center border-b border-slate-300",
        task.state === "TASK_ARCHIVED" ? "text-slate-400" : "text-slate-700"
      )}
    >
      <label
        htmlFor={`checkbox-${task.id}`}
        aria-label={`checkbox-${task.id}`}
        className="relative flex items-center"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`checkbox-${task.id}`}
          checked={task.state === "TASK_ARCHIVED"}
          className="border w-4 h-4 border-slate-400 rounded-sm"
        />

        <span
          className="absolute w-4 h-4 z-100 text-gray-400"
          onClick={() => onArchiveTask(task.id)}
        >
          {task.state === "TASK_ARCHIVED" && <BsCheck />}
        </span>
      </label>

      <label htmlFor={`title-${task.id}`} aria-label={task.title}>
        <input
          id={`title-${task.id}`}
          type="text"
          value={task.title}
          readOnly={true}
          name="title"
          className="outline-0"
        />
      </label>

      {task.state !== "TASK_ARCHIVED" && (
        <div className="ml-auto">
          <CustomButton
            icon={<AiFillStar />}
            iconSize="xl"
            iconColor={
              task.state === "TASK_PINNED"
                ? "rgb(56 189 248)"
                : "rgb(226 232 240)"
            }
            onClick={() => onPinTask(task.id)}
            id={`pinTask-${task.id}`}
            aria-label={`pinTask-${task.id}`}
            key={`pinTask-${task.id}`}
          />
        </div>
      )}
    </div>
  );
};

export default Task;
