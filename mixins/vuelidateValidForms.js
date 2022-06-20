import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      isChecked: false,
    }
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(15),
      minLength: minLength(2),
    },
    email: {
      required,
      email,
    },
    phone: {
      required,
      minLength: minLength(8),
      alpha: (val) => /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(val),
    },
  },
}
