import CustomButton from "@/components/CustomButton";
import Task from "@/components/Task";
import TaskList from "@/components/TaskList";
import { BsPlusCircle } from "react-icons/bs";
import tasks from "@/lib/tasksData";

export default function MyApp() {
  return (
    <main className="min-h-screen flex flex-col gap-y-4 p-10">
      <CustomButton
        icon={<BsPlusCircle />}
        iconSize="lg"
        tooltip={"Add"}
        onClick={() => alert("Kuku")}
      />
      <CustomButton
        icon={<BsPlusCircle />}
        label={"Add"}
        tooltip={"Custom Button"}
        onClick={() => alert("Kukareku ")}
      />
      <CustomButton
        label={"Add"}
        tooltip={"Custom Button"}
        onClick={() => alert("Kukareku ")}
      />
      <Task
        task={{ id: "01", title: "Task 1", state: "TASK_INBOX" }}
        onArchiveTask={() => {}}
        onPinTask={() => {}}
      />
      <Task
        task={{ id: "02", title: "Task 2", state: "TASK_PINNED" }}
        onArchiveTask={() => {}}
        onPinTask={() => {}}
      />
      <Task
        task={{ id: "03", title: "Task 3", state: "TASK_ARCHIVED" }}
        onArchiveTask={() => {}}
        onPinTask={() => {}}
      />

      <div className="flex gap-x-4">
        <TaskList />
      </div>
    </main>
  );
}
