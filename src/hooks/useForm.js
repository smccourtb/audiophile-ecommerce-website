import { useState } from "react";
import NiceModal from "@ebay/nice-modal-react";
import { ConfirmationModal } from "../components/ConfirmationModal";

export const useForm = (options) => {
  const [data, setData] = useState(options?.initialValues || { zip: "" });
  const [errors, setErrors] = useState({});
  const showCartModal = () => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show(ConfirmationModal);
    document.querySelector("body").style.overflow = "hidden";
  };
  const handleChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        // value of the field we're validating
        const value = data[key];
        // the matching validation rule for this key
        const validation = validations[key];
        // REQUIRED
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }
        // PATTERN
        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }
        // CUSTOM
        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});
    if (options?.onSubmit) {
      options.onSubmit();
    }
    showCartModal();
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  };
};
