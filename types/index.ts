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
    hidden: number;
    solded: number;
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
    solded: number;
    hidden: number;
}

export interface CarCatalogueProps {
    title?: string;
    subtitle?: string;
    hidden: number;
    solded: number;
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
    read?: number;
    datePublication: number
}