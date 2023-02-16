// Đối tượng `Validator`
function Validator(options){
    var selectorRules = {};
    // Hàm thực hiện validate
    function validate(inputElement, rule){
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;
        // Lấy ra các rules & kiểm tra
        var rules = selectorRules[rule.selector];
        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for(var i = 0; i < rules.length; ++i){
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }
        if(errorMessage){
            errorElement.innerHTML = errorMessage;
            inputElement.parentElement.classList.add('invalid')
        }
        else {
            errorElement.innerHTML = '';
            inputElement.parentElement.classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if(formElement)
    {
        // Khi submit form
        formElement.onsubmit = function(e){
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rule
            options.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector);
            var isValid = validate(inputElement, rule);
            if(!isValid)
                isFormValid = false;
            });

            if(isFormValid){
                if(typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    var formValues = Array.from(enableInputs).reduce(function(values,input){
                        return (values[input.name] = input.value) && values;
                    },{});
                    options.onSubmit(formValues);
                }
            }
        }
        // Lặp qua mỗi rule và xử lý(Lắng nghe sự kiện blur,input...)
        options.rules.forEach((rule) => {

            // Lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector]))
            {
                selectorRules[rule.selector].push(rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
            if(inputElement){
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                }

                // XỬ lý khi người dùng nhập input
                inputElement.oninput = () => {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerHTML = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        })
    }
}

// Định nghĩa rules
// Nguyên tắc rules
// 1. Khi có lỗi in ra lỗi
// 2. Khi ko có lỗi trả về undefined
Validator.isRequired = function (selector,message){
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? undefined : message ||'Vui lòng nhập trường này';
        }
    }
}

Validator.isEmail = function (selector,message){
    return {
    selector: selector,
    test: (value) => {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(value) ? undefined : message ||'Trường này phải là email';
    }
    }
}

Validator.minLength = function (selector,min,message){
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min ? undefined : message ||`Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    }
}

Validator.isConfirmed = function(selector,getConfirmValue,message){
    return {
        selector: selector,
        test: (value) => {
            return value === getConfirmValue() ? undefined : message || `Giá trị nhập vào không đúng`;
        }
    }
}