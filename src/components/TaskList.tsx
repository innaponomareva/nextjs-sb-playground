import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Task, { ITask } from "./Task";
import { BsCheckCircle } from "react-icons/bs";
import { updateTaskState } from "../store/taskboxSlice";
import { useMemo, useState } from "react";

const TaskList: React.FC = () => {
  const data = useAppSelector((state) => state.taskbox.tasks);
  const tasksInOrder = useMemo(() => filterTasks(data), [data]);
  const { status } = useAppSelector((state) => state.taskbox);
  const dispatch = useAppDispatch();

  const pinTask = (value: string) => {
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_PINNED" }));
    console.log("pinTask");
  };
  const archiveTask = (value: string) => {
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_ARCHIVED" }));
    console.log("archiveTask");
  };

  const LoadingRow = (
    <div className="animate-pulse flex gap-x-4 py-2 border-b border-slate-200">
      <div className="w-4 h-4 bg-slate-200 rounded-sm my-1"></div>
      <div className="h-4 w-full bg-slate-200 rounded-sm my-1"></div>
    </div>
  );

  return (
    <div className="border border-slate-300 shadow rounded-sm p-4 w-full min-h-[369px] mx-auto flex flex-col gap-y-2">
      {status === "loading" && (
        <>
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
        </>
      )}

      {status !== "loading" && data.length === 0 && (
        <div className="flex flex-col gap-y-1 items-center my-auto">
          <BsCheckCircle className="text-sky-400 text-2xl" />
          <div className="text-slate-700">Empty</div>
        </div>
      )}

      {status !== "loading" &&
        data.length > 0 &&
        tasksInOrder.map((task) => (
          <Task
            key={task.id}
            task={task}
            onPinTask={(task) => pinTask(task)}
            onArchiveTask={(task) => archiveTask(task)}
          />
        ))}
    </div>
  );
};

export default TaskList;

const filterTasks = (data: ITask[]) => {
  return [
    ...data.filter((t) => t.state === "TASK_PINNED"),
    ...data.filter((t) => t.state === "TASK_INBOX"),
    ...data.filter((t) => t.state === "TASK_ARCHIVED"),
  ];
};
