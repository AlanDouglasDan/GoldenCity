import React, { FC, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackNavParams } from "navigation/auth-stack/AuthStackNav";
import { SelectInput } from "components/SelectInput";
import { PropertyCard } from "components/PropertyCard";
import { properties, defaultFilters } from "core/constants";
import { layout } from "core/styles";
import styles from "./Properties.styles";

const Properties: FC<
  NativeStackScreenProps<AuthStackNavParams, "Properties">
> = ({ navigation }) => {
  const [filters, setFilters] = useState(defaultFilters);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setFilters(defaultFilters);
    setTimeout(() => setRefreshing(false), 500); // Simulate network
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProperties = properties.filter((property) => {
    if (
      filters.propertyType !== "all" &&
      property.type !== filters.propertyType
    )
      return false;
    if (
      filters.location &&
      !property.location.toLowerCase().includes(filters.location.toLowerCase())
    )
      return false;
    if (filters.minROI && parseFloat(property.roi) < parseFloat(filters.minROI))
      return false;
    if (filters.maxROI && parseFloat(property.roi) > parseFloat(filters.maxROI))
      return false;

    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map(Number);
      if (max && (property.price.usd < min || property.price.usd > max))
        return false;
      if (!max && property.price.usd < min) return false;
    }

    if (filters.fundingStatus !== "all") {
      const fundedPercentage = parseInt(property.metrics.funded);
      switch (filters.fundingStatus) {
        case "new":
          if (fundedPercentage > 30) return false;
          break;
        case "active":
          if (fundedPercentage < 30 || fundedPercentage >= 90) return false;
          break;
        case "almostFunded":
          if (fundedPercentage < 90) return false;
          break;
        default:
          break;
      }
    }

    return true;
  });

  // Sort properties based on selected criteria
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (filters.sortBy) {
      case "priceAsc":
        return a.price.usd - b.price.usd;
      case "priceDesc":
        return b.price.usd - a.price.usd;
      case "roiDesc":
        return parseFloat(b.roi) - parseFloat(a.roi);
      case "fundingDesc":
        return parseInt(b.metrics.funded) - parseInt(a.metrics.funded);
      default:
        return 0;
    }
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={[layout.spacedRow, { paddingHorizontal: 20, paddingBottom: 16 }]}
      >
        <Text style={styles.title}>Investment Properties</Text>

        <TouchableOpacity
          onPress={() => setShowFilters(!showFilters)}
          style={[
            styles.filterIcon,
            showFilters
              ? { backgroundColor: "rgb(214, 240, 255)" }
              : { backgroundColor: "transparent" },
          ]}
        >
          <Feather
            name="filter"
            size={20}
            color={showFilters ? "#2563EB" : "black"}
          />
        </TouchableOpacity>
      </View>

      {showFilters && (
        <View style={styles.container}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.filtersGrid}
            showsVerticalScrollIndicator={false}
          >
            {/* Price Range */}
            <View style={styles.filterItem}>
              <SelectInput
                label="Price Range"
                value={filters.priceRange}
                options={[
                  {
                    label: "All Prices",
                    value: { name: "All Prices", id: "all" },
                  },
                  {
                    label: "Under $500,000",
                    value: { name: "Under $500,000", id: "0-500000" },
                  },
                  {
                    label: "$500,000 - $1,000,000",
                    value: {
                      name: "$500,000 - $1,000,000",
                      id: "500000-1000000",
                    },
                  },
                  {
                    label: "Over $1,000,000",
                    value: { name: "Over $1,000,000", id: "1000000" },
                  },
                ]}
                onSelect={(value) => handleFilterChange("priceRange", value.id)}
              />
            </View>

            {/* Property Type */}
            <View style={styles.filterItem}>
              <SelectInput
                label="Property Type"
                value={filters.propertyType}
                options={[
                  {
                    label: "All Types",
                    value: { name: "All Types", id: "all" },
                  },
                  {
                    label: "House",
                    value: { name: "House", id: "house" },
                  },
                  {
                    label: "Apartment",
                    value: { name: "Apartment", id: "apartment" },
                  },
                  {
                    label: "Villa",
                    value: { name: "Villa", id: "villa" },
                  },
                ]}
                onSelect={(value) =>
                  handleFilterChange("propertyType", value.id)
                }
              />
            </View>

            {/* Location */}
            <View style={styles.filterItem}>
              <Text style={styles.label2}>Location</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter location"
                value={filters.location}
                onChangeText={(value) => handleFilterChange("location", value)}
              />
            </View>

            {/* Minimum ROI */}
            <View style={styles.filterItem}>
              <Text style={styles.label2}>Minimum ROI</Text>
              <TextInput
                style={styles.input}
                placeholder="Min ROI %"
                value={filters.minROI}
                keyboardType="numeric"
                onChangeText={(value) => handleFilterChange("minROI", value)}
              />
            </View>

            {/* Funding Status */}
            <View style={styles.filterItem}>
              <SelectInput
                label="Funding Status"
                value={filters.fundingStatus}
                options={[
                  {
                    label: "All Statuses",
                    value: { name: "All Statuses", id: "all" },
                  },
                  {
                    label: "New Listings",
                    value: { name: "New Listings", id: "new" },
                  },
                  {
                    label: "Active Funding",
                    value: { name: "Active Funding", id: "active" },
                  },
                  {
                    label: "Almost Funded",
                    value: { name: "Almost Funded", id: "almostFunded" },
                  },
                ]}
                onSelect={(value) =>
                  handleFilterChange("fundingStatus", value.id)
                }
              />
            </View>

            {/* Sort By */}
            <View style={styles.filterItem}>
              <SelectInput
                label="Sort By"
                value={filters.sortBy}
                options={[
                  {
                    label: "Newest First",
                    value: { name: "Newest First", id: "newest" },
                  },
                  {
                    label: "Price: Low to High",
                    value: { name: "Price: Low to High", id: "priceAsc" },
                  },
                  {
                    label: "Price: High to Low",
                    value: { name: "Price: High to Low", id: "priceDesc" },
                  },
                  {
                    label: "Highest ROI",
                    value: { name: "Highest ROI", id: "roiDesc" },
                  },
                  {
                    label: "Most Funded",
                    value: { name: "Most Funded", id: "fundingDesc" },
                  },
                ]}
                onSelect={(value) => handleFilterChange("sortBy", value.id)}
              />
            </View>
          </ScrollView>
        </View>
      )}

      <ScrollView
        style={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <View>
          {sortedProperties.length === 0 ? (
            <View style={{ alignItems: "center", marginTop: 40 }}>
              <Text style={{ fontSize: 18, color: "#888", marginBottom: 8 }}>
                No properties found
              </Text>
            </View>
          ) : (
            sortedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                navigation={navigation}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Properties;
