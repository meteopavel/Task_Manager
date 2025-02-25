import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const TaskEditModal = ({ taskData, toggle, onSave }) => {
  const [item, setItem] = useState(taskData);

  useEffect(() => {
    setItem(taskData);
  }, [taskData]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    setItem({ ...item, [name]: value });
  };

  return (
    <Modal isOpen={true} toggle={toggle}>
      <ModalHeader toggle={toggle}>Задача</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="task-title">Название</Label>
            <Input
              type="text"
              id="task-title"
              name="title"
              value={item.title}
              onChange={handleChange}
              placeholder="Введите название задачи"
            />
          </FormGroup>
          <FormGroup>
            <Label for="task-description">Описание</Label>
            <Input
              type="text"
              id="task-description"
              name="description"
              value={item.description}
              onChange={handleChange}
              placeholder="Введите описание задачи"
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="completed"
                checked={item.completed}
                onChange={handleChange}
              />
              Выполнено
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={() => onSave(item)}>
          Сохранить
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default TaskEditModal;