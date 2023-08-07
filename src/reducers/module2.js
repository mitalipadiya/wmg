import { GET_MODULE2, UPDATE_INDUSTRIAL_HEAT_PUMP, UPDATE_BASELINE, UPDATE_BIOMASS, UPDATE_ECONOMIC_PARAMETERS, UPDATE_ENERGY_MANAGEMENT_SYSTEM, UPDATE_LED, UPDATE_PASSIVE_INFRARED_SENSOR, UPDATE_SMART_METERS_ELECTRICITY, UPDATE_SMART_METERS_GAS, UPDATE_SOLAR_PV, UPDATE_SOLAR_PV_BESS, UPDATE_SOLAR_THERMAL, UPDATE_TECHNOLOGIES, UPDATE_VOLTAGE_OPTIMISATION, UPDATE_WIND, UPDATE_EMISSION_SAVINGS, UPDATE_MACC, UPDATE_PARETO_OPTIMISATION, UPDATE_CHP } from "../actions/types";

const initialState = {
    baseline: {
        averageAnnualElectricityConsumption: "",
        averageAnnualGasConsumption: "",
        emissionFactorGridElectricity: "0.284",
        emissionFactorForGridGas: "0.18",
        annualOperationalEmissionsForGridElectricity: "",
        annualOperationalEmissionsForGridGas: "",
        totalBaselineEmissions: "",
        isComplete: false
    },
    technologies: {
        solarPV: false,
        wind: false,
        solarPvBess: false,
        led: false,
        smartMetersElectricity: false,
        passiveInfraredSensor: false,
        voltageOptimisation: false,
        biomass: false,
        solarThermal: false,
        industrialHeatPump: false,
        smartMetersGas: false,
        energyManagementSystem: false,
        chp: false,
        isComplete: false
    },
    economicParameters: {
        unitPriceOfElectricity: "0.248",
        unitPriceOfGas: "0.0603",
        yearsOfAbatement: "10",
        discountRate: "5",
        annualOperationalCostOfElectricity: "",
        annualOperationalCostOfHeat: "",
        isComplete: false
    },
    solarPV: {
        averageAnnualElectricityRequirements: "",
        percentAnnualElectricityFromPV: "80",
        location: "Coventry",
        latitudeLongitude: "",
        electricityGeneratedPVSystem: "",
        annualElectricityGenerationSelectedLocation: "",
        annualSolarInsolationSelectedLocation: "",
        solarModuleEfficiency: "15",
        gHGEmissionsElectricityPVSystem: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        unitInstallationCostPVSystem: "",
        initialInvestmentPVSystem: "",
        annualElectricityInsteadOfGrid: "",
        sizeOfPVSystem: "",
        areaOfPVSystem: "",
        annualOperationalCostSavings: "",
        netPresentValueOperationalEnergy: "",
        totalOperationalEmissionSavingsAbatementPeriodInTon: "",
        costEffectivenessOperationalEmission: "",
        isComplete: false
    },
    wind: {
        averageAnnualElectricityRequirements: "",
        percentAnnualElectricityFromWind: "15",
        location: "Coventry",
        latitudeLongitude: "",
        height: "80",
        turbineModel: "Gamesa G128 4500",
        averageAnnualWindSpeed: "",
        annualGenerationWindSystem: "",
        inverterEfficiency: "90",
        sizeOfWindSystem: "",
        electricityUsedFromWindSystemInsteadGrid: "",
        unitInstallationCost: "1300",
        initialInvestmentWindSystem: "",
        annualOperationalCost: "",
        netPresentValueOperationalEnergyCostSavings: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        totalOperationalEmissionSavingsAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavings: "",
        isComplete: false
    },
    solarPvBess: {
        averageAnnualElectricityRequirements: "",
        percentAnnualElectricityFromPVBESS: "80",
        numberOfDaysOfOperationInAYear: "300",
        location: "Coventry",
        latitudeLongitude: "",
        dailyElectricityRequirementUsingPVBESSSystem: "",
        dailyAverageElectricityGeneration: "",
        averageDailySolarInsolation: "",
        solarModuleEfficiency: "15",
        batteryEfficiency: "90",
        depthOfDischargeOfBattery: "80",
        numberOfDaysOfAutonomy: "0",
        sizeOfPVSystem: "",
        areaOfPVSystem: "",
        batterySize: "",
        unitInstallationCostPVSystem: "",
        initialInvestmentPVSystem: "",
        unitPriceOfLithiumIonBatteryPack: "118",
        initialInvestmentForBESSSystem: "",
        annualElectricityUsedFromPVBESSSystemInsteadOfGrid: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        gHGEmissionsElectricityPVSystem: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        totalOperationalEmissionSavingsAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: ""
    },
    biomass: {
        averageAnnualGasRequirements: "",
        annualHeatYouWantToGetFromBiomass: "80",
        whichLoadsAreToBeSupplied: "Process heat",
        biomassBoilerStrategy: "Peak load",
        capacityFactor: "60",
        biomassFuel: "Wood chip",
        existingBoilerEfficiency: "80",
        hoursOfHeatDemand: "3650",
        netCalorificValueOfDryFuel: "5.25",
        moistureContent: "35",
        efficiencyOfBiomassPlant: "80",
        annualDeliveredHeatDemand: "",
        averageLoad: "",
        peakLoad: "",
        annualDeliveredHeatDemandUsingBiomassBoiler: "",
        sizeOfBiomassBoiler: "",
        netCVOfFuelAsReceived: "",
        deliveredHeatPerUnitMassOfFuel: "",
        fuelUsage: "",
        unitInstallationCostOfBiomassBoiler: "3280",
        initialInvestmentForBiomassSystem: "",
        unitPriceOfFuel: "80",
        annualCostOfBiomassFuel: "",
        unitPriceOfGridGas: "",
        annualCostOfGridGasInPresenceOfBiomassBoiler: "",
        annualCostOfGridGasInAbsenceOfBiomassBoile: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        emissionFactorOfGridGas: "",
        emissionFactorOfBiomassFuel: "0.01579",
        gHGEmissionsForHeatInAbsenceOfBiomassSystem: "",
        gHGEmissionsForHeatInPresenceOfBiomassSystem: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false
    },
    chp: {
        averageAnnualElectricityRequirements: "",
        numberOfHoursOfElectricityDemand: "5000",
        averageAnnualGasRequirements: "",
        numberOfHoursOfHeatDemand: "6000",
        annualElectricityYouWantToGetFromCHPSystem: "80",
        annualHeatYouWantToGetFromCHPSystem: "50",
        loadsAreToBeSupplied: "Hot water only",
        cHPFuel: "Natural Gas",
        cHPSystem: "Reciprocating Engine",
        cHPSystemPrimeMoverTechnology: "Reciprocating Engine",
        averageElectricityLoad: "",
        existingBoilerEfficiency: "80",
        electricalEfficiency: "29",
        thermalEfficiency: "53",
        heatToPowerRatioForSite: "",
        averageLoadHeatDemand: "",
        annualDeliveredHeatDemandUsingCHPSystemInsteadOfGridGas: "",
        baseLoadHeatDemand: "",
        annualElectricityDeliveredUsingCHPSystemInsteadOfGridGas: "",
        sizeOfCHPSystem: "",
        fuelUsage: "",
        unitInstallationCostOfCHPSystem: "2262",
        initialInvestmentForCHPSystem: "",
        unitPriceOfElectricity: "",
        annualCostOfElectricityInAbsenceOfCHPSystem: "",
        unitPriceOfNaturalGas: "",
        annualCostOfGridGasInAbsenceOfCHPSystem: "",
        annualCostOfCHPFuel: "",
        annualCostOfGridElectricityInPresenceOfCHPSystem: "",
        annualCostOfGridGasInPresenceOfCHPSystem: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        emissionFactorForGridGas: "",
        gHGEmissionsForHeatInAbsenceOfCHPSystem: "",
        emissionFactorOfGridElectricity: "",
        gHGEmissionsForElectricityInAbsenceOfCHPSystem: "",
        gHGEmissionsForElectricityInPresenceOfCHPSystem: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false
    },
    led: {
        currentTypeOfLighting: "Incandescent Bulb",
        currentLightingPowerRating: "60",
        numberOfUnits: "50",
        dailyUsage: "16",
        numberOfOperationalDaysInaYear: "200",
        annualUsage: "",
        lEDPowerRating: "",
        unitCostForLED: "9",
        initialInvestmentForLEDs: "",
        costofElectricityWithCurrentLighting: "",
        costOfElectricityWithLEDs: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        annualElectricityConsumptionWithCurrentLighting: "",
        annualElectricityConsumptionWithLEDs: "",
        annualElectricitySavingsWithLEDs: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false
    },
    passiveInfraredSensor: {
        numberOfLamps: "50",
        wattageOfLamp: "60",
        numberOfDaysInYear: "200",
        estimatedHoursONPerDay: "16",
        estimatedHoursOccupiedPerDay: "12",
        areaOfIndustrialFacility: "5000",
        detectionRangeOfPIRSensors: "491",
        numberOfPIRSensors: "",
        annualElectricityConsumptionWithoutPirSensor: "",
        annualElectricityConsumptionWithPirSensorInstalled: "",
        annualElectricitySavingsWithPirSensors: "",
        unitCostOfPirSensor: "140",
        initialInvestmentForPir: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSaings: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        isComplete: false
    },
    smartMetersElectricity: {
        averageAnnualElectricityConsumption: "",
        averageElectricitySavingsIncentivisedUsingSmartMeter: "2.80",
        annualElectricitySavingsWithSmartMeters: "",
        annualOperationalCostSavings: "",
        initialInvestmentForElectricitySmartMeter: "136.00",
        netPresentValueOfOperationalEnergyCostSavings: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false
    },
    smartMetersGas: {
        averageAnnualGasConsumption: "",
        averageGasSavingsIncentivisedUsingSmartMeter: "4.50",
        annualGasConsumptionWithSmartMeters: "",
        initialInvestmentForGasSmartMeter: "136.00",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false
    },
    voltageOptimisation: {
        averageAnnualElectricityConsumption: "",
        averageElectricitySavingsUsingVoltageOptimisation: "13",
        annualElectricitySavingsWithVoltageOptimisation: "",
        annualOperationalCostSavings: "",
        initialInvestmentForVoltageOptimisation: "7500",
        netPresentValueOfOperationalEnergyCostSavings: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false
    },
    energyManagementSystem: {
        averageAnnualElectricityConsumption: "",
        averageAnnualGasConsumption: "",
        averageElectricitySavingsIncentivisedUsingBEMS: "12",
        averageGasSavingsIncentivisedUsingBEMS: "9",
        annualElectricitySavingsWithBEMS: "",
        annualGasSavingsWithBEMS: "",
        initialInvestmentForBEMS: "5000",
        annualOperationalElectricityCostSavings: "",
        annualOperationalGasCostSavings: "",
        totalAnnualOperationalCostSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        gHGEmissionsSavingsForElectricityWithBEMS: "",
        gHGEmissionsSavingsForGasWithBEMS: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false
    },
    solarThermal: {
        averageAnnualGasRequirements: "",
        heatDemandToBeTakenFromSolarThermalSystem: "50",
        location: "Coventry",
        latitudeLongitude: "",
        existingBoilerEfficiency: "80",
        incidentSolarIrradiation: "",
        annualSolarIrradiation: "",
        opticalEfficiency: "0.77",
        firstOrderEfficiencyCoefficient: "3.45",
        secondOrderEfficiencyCoefficient: "0.0083",
        ambientTemperature: "",
        inletTemperature: "283.15",
        outletTemperature: "353.00",
        collectorTemperature: "",
        efficiencyOfSolarThermalSystem: "",
        capacityOfSolarThermalSystem: "",
        annualGridGasSavingInPresenceOfSolarThermalSystem: "",
        sizeOfSolarThermalSystem: "",
        unitInstallationCostOfSolarThermalSystem: "245",
        initialInvestmentForSolarThermalSystem: "",
        unitPriceOfGridGas: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        emissionFactorOfGridGas: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false
    },
    industrialHeatPump: {
        averageAnnualGasRequirements: "",
        heatLoadIsAtTemperaturesBelow100C: "85",
        heatLoadIsAtTemperaturesBetween100C150C: "10",
        existingBoilerEfficiency: "80",
        hoursOfHeatDemand: "2920",
        annualHeatLoad: "",
        annualGridGasSavingInPresenceOfIHP1: "",
        heatSourceTemperature: "75",
        heatSinkTemperature: "120",
        temperatureLift: "",
        refrigerant: "R245fa",
        coefficientOfPerformanceOfIHP1: "4.2",
        electricityInput: "",
        annualGridGasSavingInPresenceOfIHP2: "",
        coefficientOfPerformanceOfIHP2: "",
        electricityInputForIHP2: "",
        sizeOfIndustrialHeatPump1: "",
        annualElectricityInputToIHP1: "",
        sizeOfIndustrialHeatPump2: "",
        annualElectricityInputToIHP2: "",
        unitInstallationCostOfIHP: "",
        initialInvestmentForIHP1: "",
        initialInvestmentForIHP2: "",
        unitPriceOfElectricity: "",
        annualCostOfElectricityForIHP1: "",
        annualCostOfElectricityForIHP2: "",
        unitPriceOfGridGas: "",
        annualCostSavingsForGridGas: "",
        annualCostOfElectricityForIHPs: "",
        annualOperationalCostSavings: "",
        netPresentValueOfOperationalEnergyCostSavings: "",
        emissionFactorOfGridGas: "",
        emissionFactorOfElectricityUsedForIHPs: "",
        gHGEmissionsForHeatInAbsenceOfIHP: "",
        gHGEmissionsForHeatInPresenceOfIHP: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriod: "",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavingsOnly: "",
        isComplete: false
    },
    emissionSavings: {
        isComplete: false
    },
    macc: {
        isComplete: false
    },
    paretoOptimisation: {
        isComplete: false
    }

};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_MODULE2:
            return { data: payload };
        case UPDATE_BASELINE:
            return {
                ...state,
                baseline: payload
            }
        case UPDATE_TECHNOLOGIES:
            return {
                ...state,
                technologies: payload
            }
        case UPDATE_ECONOMIC_PARAMETERS:
            return {
                ...state,
                economicParameters: payload
            }
        case UPDATE_SOLAR_PV:
            return {
                ...state,
                solarPV: payload
            }
        case UPDATE_WIND:
            return {
                ...state,
                wind: payload
            }
        case UPDATE_SOLAR_PV_BESS:
            return {
                ...state,
                solarPvBess: payload
            }
        case UPDATE_BIOMASS:
            return {
                ...state,
                biomass: payload
            }
        case UPDATE_CHP:
            return {
                ...state,
                chp: payload
            }
        case UPDATE_LED:
            return {
                ...state,
                led: payload
            }
        case UPDATE_PASSIVE_INFRARED_SENSOR:
            return {
                ...state,
                passiveInfraredSensor: payload
            }
        case UPDATE_SMART_METERS_ELECTRICITY:
            return {
                ...state,
                smartMetersElectricity: payload
            }
        case UPDATE_SMART_METERS_GAS:
            return {
                ...state,
                smartMetersGas: payload
            }
        case UPDATE_VOLTAGE_OPTIMISATION:
            return {
                ...state,
                voltageOptimisation: payload
            }
        case UPDATE_ENERGY_MANAGEMENT_SYSTEM:
            return {
                ...state,
                energyManagementSystem: payload
            }
        case UPDATE_SOLAR_THERMAL:
            return {
                ...state,
                solarThermal: payload
            }
        case UPDATE_INDUSTRIAL_HEAT_PUMP:
            return {
                ...state,
                industrialHeatPump: payload
            }
        case UPDATE_EMISSION_SAVINGS:
            return {
                ...state,
                emissionSavings: payload
            }
        case UPDATE_MACC:
            return {
                ...state,
                macc: payload
            }
        case UPDATE_PARETO_OPTIMISATION:
            return {
                ...state,
                paretoOptimisation: payload
            }
        default:
            return state;
    }
}