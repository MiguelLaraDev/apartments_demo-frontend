import axios from "axios";
import { format, differenceInYears } from "date-fns";
import { useState } from "react";

export interface IFormErrors {
  error: boolean;
  message: string;
}

const useRentForm = () => {
  const [rentStatus, setRentStatus] = useState("");
  const [birthday, setBirthday] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({
    birthday: {
      error: false,
      message: "",
    },
    name: {
      error: false,
      message: "",
    },
  });

  const formatDate = (value: Date) => {
    return format(value, "yyyy-MM-dd");
  };

  const validateBirthday = (birthday: string) => {
    const date = new Date(birthday);
    const age = differenceInYears(new Date(), date);

    if (age < 18) {
      return {
        error: true,
        message: "You must have at least 18 years old in order to rent a flat",
      };
    }

    return {
      error: false,
      message: "",
    };
  };

  const validateName = (name: string) => {
    const splitted = name.split(" ");

    if (splitted.length < 2) {
      return {
        error: true,
        message: "Please enter your first and last name",
      };
    }

    if (name.length < 10) {
      return {
        error: true,
        message: "Looks like your name is too short",
      };
    }

    return {
      error: false,
      message: "",
    };
  };

  const validate = (type: string, value: string): void => {
    let res: any = {};
    switch (type) {
      case "birthday":
        res = validateBirthday(value);

        break;

      case "name":
        res = validateName(value);
        break;

      default:
        break;
    }

    setErrors((currentErrors) => {
      return {
        ...currentErrors,
        ...{
          [type]: res,
        },
      };
    });
  };

  const setFields = (type: string, value: string): void => {
    switch (type) {
      case "birthday":
        setBirthday(format(new Date(value), "yyyy-MM-dd"));
        break;

      case "name":
        setName(value);
        break;

      default:
        break;
    }
  };

  const update = (type: string, value: string) => {
    validate(type, value);
    setFields(type, value);
  };

  const submit = async (url: string, apartmentId: string) => {
    const data = {
      user: {
        name,
        birthday,
      },
      apartmentId,
    };

    try {
      await axios.post(url, data);
      setRentStatus("success");
    } catch (error) {
      setRentStatus("error");
    }
  };

  return {
    errors,
    fields: { birthday, name },
    rentStatus,
    submit,
    update,
  };
};

export default useRentForm;
