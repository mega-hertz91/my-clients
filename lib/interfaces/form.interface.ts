import { z } from 'zod';

// Поддерживаемые типы инпутов (можно расширять)
export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'textarea'
  | 'checkbox'
  | 'select';

export interface SelectOption {
  label: string;
  value: string;
}

// Конфигурация одного поля
export interface FormFieldConfig {
  name: string;               // Ключ поля (пойдет в name инпута для FormData)
  label: string;              // Заголовок над полем
  type: FieldType;            // Тип компонента из Shadcn
  placeholder?: string;       // Плейсхолдер
  description?: string;       // Подсказка под полем (FormDescription)
  defaultValue?: string | number | boolean;
  required?: boolean;
  options?: SelectOption[];   // Для type: 'select'
  validation?: z.ZodType;  // Схема валидации конкретного поля (пригодится и для Zod, и для RHF)
}

// Итоговая схема всей формы
export interface FormSchema {
  id: string;
  title?: string;
  description?: string;
  submitLabel: string;
  fields: FormFieldConfig[];
}

/**
 * @prop timestamp // Нужен для изменения стейта при каждой отправки
 * @prop message   // Текст ответа
 * @prop values    // Значения полей фомы, для возрата их заполнненого состояня на клиент
 * @prop errors    // Ошибки для отображения в форме
 */
export type FormState = {
  timestamp: number;
  message?: string;
  values?: Record<string, string>;
  errors: Record<string, string[]>;
};
