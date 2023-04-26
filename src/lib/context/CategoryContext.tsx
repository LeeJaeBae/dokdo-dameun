import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import api from '@/api/axios';

type CategoryContextType = {
    categories: any[];
    selectedCategory: any;
    selectCategory: (category: any) => void;
};

const CategoryContext = createContext<CategoryContextType>({
    categories: [],
    selectedCategory: {},
    selectCategory: () => {},
});

export const CategoryProvider = (props: any) => {
    const [categories, setCategories] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<any>();
    useEffect(() => {
        api.get('categories').then(res => {
            setCategories(res.data);
        });
    }, []);
    const value = useMemo(() => {
        return {
            categories,
            selectedCategory,
            selectCategory: (id: string) => {
                const category = categories.find(
                    _category => _category.id === id,
                );
                if (!category) {
                    return null;
                }
                setSelectedCategory(category);
            },
        };
    }, [categories, selectedCategory]);

    return (
        <CategoryContext.Provider value={value}>
            {props.children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => {
    return useContext(CategoryContext);
};
