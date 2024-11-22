import { mock_habits } from "./habits";
import { mock_reminders } from "./reminders";
import { mock_users } from "./users";

function add_mock_data_to_local_storage() {
  localStorage.setItem("reminders", JSON.stringify(mock_reminders));
  localStorage.setItem("users", JSON.stringify(mock_users));
  localStorage.setItem("habits", JSON.stringify(mock_habits));
}

export { add_mock_data_to_local_storage };
