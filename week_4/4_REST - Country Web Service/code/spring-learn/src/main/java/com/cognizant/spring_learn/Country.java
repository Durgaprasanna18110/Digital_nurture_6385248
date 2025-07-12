package com.cognizant.spring_learn;

public class Country {
    private String code;
    private String name;

    public Country() {
        System.out.println("Inside Country Constructor.");
    }

    public String getCode() {
        System.out.println("Getter for Code called");
        return code;
    }

    public void setCode(String code) {
        System.out.println("Setter for Code called");
        this.code = code;
    }

    public String getName() {
        System.out.println("Getter for Name called");
        return name;
    }

    public void setName(String name) {
        System.out.println("Setter for Name called");
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}
