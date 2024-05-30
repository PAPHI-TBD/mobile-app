import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import styles from './filter.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

interface FilterItem {
    name: string;
    tag: string;
}

interface FilterProps {
    filterList: FilterItem[];
    clickEventSlider: (tag: string) => void;
}


const Filter: React.FC<FilterProps> = ({ filterList, clickEventSlider }) => {
    // const [filterData, setFilterData] = useState<FilterProps>(
    //     {
    //         filterList: [
    //             {
    //                 name: 'Trending',
    //             },
    //             {
    //                 name: 'concert',
    //             },
    //             {
    //                 name: 'party',
    //             },
    //             {
    //                 name: 'sports',
    //             },
    //             {
    //                 name: 'art',
    //             },
    //             {
    //                 name: 'movies',
    //             },
                
    //         ]
    //     }
        
    // );

    const [filterData] = [
        {
            name: 'trending',
            tag: 'trending',
        },
        {
            name: 'hot topics',
            tag: 'hot_topics',
        },
        {
            name: 'concert',
            tag: 'concert',
        },
        {
            name: 'party',
            tag: 'party',
        },
        {
            name: 'sports',
            tag: 'sports',
        },
        {
            name: 'art',
            tag: 'art',
        },
        {
            name: 'movies',
            tag: 'movies',
        },
    ]

    


    const handleCategoryClick = ( tag: string ) => {
        // handle filter click here
        clickEventSlider(tag);
        console.log(`clicked category`);
    };

    const handleFilterClick = () => {
        // handle filter click here
        console.log('clicked filter');
    }

    const renderItem = ({ item, index }: {item: FilterItem, index: number}) => {
        return (
            <TouchableOpacity onPress={() => handleCategoryClick(item.tag)}>
                <View style={[styles.textContainer, index === 0 ? styles.first : null]}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
        // if (index === 0) {
        //     return (
        //         <TouchableOpacity onPress={handleCategoryClick(item.tag)}>
        //             <View style={[styles.textContainer, styles.first]}>
        //                 <Text style={styles.text}>{item.name}</Text>
        //             </View>
        //         </TouchableOpacity> 
        //     );
        // } else {
        //     return (
        //         <TouchableOpacity onPress={handleCategoryClick}>
        //             <View style={styles.textContainer}>
        //                 <Text style={styles.text}>{item.name}</Text>
        //             </View>
        //         </TouchableOpacity>
        //     );
        // }
        
    }

    return (
        <View style={styles.container}>
            <FlatList
            data={filterList}
            style={{flex: 1}}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />

            <TouchableOpacity style={styles.menu} onPress={handleFilterClick}>
                <FontAwesomeIcon icon={faFilter} size={20} color='black' />
            </TouchableOpacity>
        </View>
        
    );
};

export default Filter;
