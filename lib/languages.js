//TAPi18n.loadTranslations('pt-BR', "project-tap");

if (Meteor.isClient) {
    Meteor.startup(function () {
        TAPi18n.setLanguage('pt-BR')
        .done(function () {
            //Session.set("showLoadingIndicator", false);
        })
        .fail(function (error_message) {
            // Handle the situation
            console.log(error_message);
        });
    });
}

T9n.setLanguage('pt');

i18n.setLanguage('pt-br');

SimpleSchema.messages({
    "required": "[label] é obrigatório",
    "minString": "[label] deve ter no mínimo [min] caracteres",
    "maxString": "[label] não pode ter mais do que [max] caracteres",
    "minNumber": "[label] deve ser ao menos [min]",
    "maxNumber": "[label] não pode ser maior do que [max]",
    "minNumberExclusive": "[label] deve ser maior que [min]",
    "maxNumberExclusive": "[label] deve ser menor que [max]",
    "minDate": "[label] deve ser igual a ou antes de [min]",
    "maxDate": "[label] não pode ser depois de [max]",
    "badDate": "[label] não é uma data válida",
    "minCount": "Você deve especificar no mínimo [minCount] valores",
    "maxCount": "Você não pode especificar mais do que [maxCount] valores",
    "noDecimal": "[label] deve ser um número inteiro",
    "notAllowed": "Esse não é um valor permitido",
    "expectedString": "[label] deve ser uma string",
    "expectedNumber": "[label] deve ser um número",
    "expectedBoolean": "[label] deve ser um boolean",
    "expectedArray": "[label] deve ser um array",
    "expectedObject": "[label] deve ser um objeto",
    "expectedConstructor": "[label] deve ser um(a) [type]",
    "keyNotInSchema": "[key] não é permitido pelo esquema",
    "notUnique": "[label] já cadastrado",
    "regEx": {
        "0": {
            "msg": "[label] falhou no teste de expressão regular"
        },
        "1": {
            "exp": "SimpleSchema.RegEx.Email",
            "msg": "[label] deve ser um endereço de email válido"
        },
        "2": {
            "exp": "SimpleSchema.RegEx.WeakEmail",
            "msg": "[label] deve ser um endereço de email válido"
        },
        "3": {
            "exp": "SimpleSchema.RegEx.Domain",
            "msg": "[label] deve ser um domínio válido"
        },
        "4": {
            "exp": "SimpleSchema.RegEx.WeakDomain",
            "msg": "[label] deve ser um domínio válido"
        },
        "5": {
            "exp": "SimpleSchema.RegEx.IP",
            "msg": "[label] deve ser um endereço IPv4 ou IPv6 válido"
        },
        "6": {
            "exp": "SimpleSchema.RegEx.IPv4",
            "msg": "[label] deve ser um endereço IPv4 válido"
        },
        "7": {
            "exp": "SimpleSchema.RegEx.IPv6",
            "msg": "[label] deve ser um endereço IPv6 válido"
        },
        "8": {
            "exp": "SimpleSchema.RegEx.Url",
            "msg": "[label] deve ser uma URL válida"
        },
        "9": {
            "exp": "SimpleSchema.RegEx.Id",
            "msg": "[label] deve ser um ID alfanumérico válido"
        }
    }
});


if (Meteor.isClient) {
    $.fn.datepicker.dates['pt-BR'] = {
        days:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],
        daysShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
        daysMin:["Do","Se","Te","Qu","Qu","Se","Sa"],
        months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        monthsShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
        today:"Hoje",
        monthsTitle:"Meses",
        clear:"Limpar",
        format:"dd/mm/yyyy"
    }
}
