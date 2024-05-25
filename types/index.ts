import { MouseEventHandler } from "react";

export interface SlideButtonProps {
    title: string;
    styles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchBarProps {
    setPage: (page: number) => void;
    setModel: (model: string) => void;
    setManufacturer: (manufacturer: string) => void;
    hidden: boolean;
    solded: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface SearchModelProps {
    model: string;
    setModel: (model: string) => void;
}

export interface PaginationProps {
    page: number;
    totalPage: number;
    setPage: (page: number) => void;
}

export interface CarDialogProps {
    car?: CarProps;
    setShowDialog: (showDialog: boolean) => void;
    setRefreshEvent: (fn:(value: boolean) => boolean) => void;
}

export interface CarProps {
    id?: number;
    brand: string;
    model: string;
    year: number;
    fuel: string;
    transmission: string;
    image: string;
    mileage: number;
    price: number;
    capacity: number;
    solded: boolean;
    hidden: boolean;
}

export interface CarCatalogueProps {
    title?: string;
    subtitle?: string;
    hidden: boolean;
    solded: boolean;
    isAdmin: boolean;
}

export interface MessageProps {
    id?: number;
    prenom: string;
    nom: string;
    telephone: string;
    email: string;
    object: string;
    description: string;
    read?: boolean;
    datePublication: number
}