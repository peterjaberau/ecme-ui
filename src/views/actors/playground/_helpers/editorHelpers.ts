class TaskManager {
    public tasks?: any = [];
    constructor() {
        this.tasks = new Set();
    }

    addTask(taskId) {
        this.tasks.add(taskId);
    }

    cancelTask(taskId) {
        window.cancelIdleCallback(taskId);
        this.tasks.delete(taskId);
    }

    clearAllTasks() {
        for (let taskId of this.tasks) {
            window.cancelIdleCallback(taskId);
        }
        this.tasks.clear();
    }
}

const taskManager = new TaskManager();

export function handleLowPriorityWork(callback, timeout = null, immediate = false) {
    if (immediate) {
        callback();
    } else {
        const options = timeout ? { timeout } : {};
        const taskId = window.requestIdleCallback((deadline) => {
            if (deadline.timeRemaining() > 0 || deadline.didTimeout) {
                callback();
            } else {
                // Yield back to the browser and reschedule the task
                handleLowPriorityWork(callback, timeout);
            }
        }, options);
        taskManager.addTask(taskId);
    }
}

export function clearAllQueuedTasks() {
    taskManager.clearAllTasks();
}
