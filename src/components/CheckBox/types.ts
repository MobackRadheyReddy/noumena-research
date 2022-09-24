export type CheckBoxProps = {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?:boolean;
    indeterminate?:boolean;
    onChange: (value:boolean)=> void;
}