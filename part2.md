Part 2: Database Design
The following database schema is designed to support a scalable multi-warehouse inventory management system.

Tables:

1. Company
- id (PK)
- name

2. Warehouse
- id (PK)
- company_id (FK)
- name
- location

3. Product
- id (PK)
- name
- sku (UNIQUE)
- price

4. Inventory
- id (PK)
- product_id (FK)
- warehouse_id (FK)
- quantity

5. Supplier
- id (PK)
- name
- contact_email

6. ProductSupplier
- id (PK)
- product_id (FK)
- supplier_id (FK)

7. InventoryLog
- id (PK)
- product_id (FK)
- warehouse_id (FK)
- change_in_quantity
- timestamp

8. Bundle
- id (PK)
- name

9. BundleItems
- id (PK)
- bundle_id (FK)
- product_id (FK)
- quantity

Design Decisions:
- SKU is marked as UNIQUE to prevent duplicate products.
- Inventory acts as a junction table between Product and Warehouse.
- InventoryLog is used to track stock changes over time.
- ProductSupplier enables many-to-many relationships between products and suppliers.
- Bundle and BundleItems support composite product structures.
- Foreign keys ensure referential integrity.
- Indexes can be applied on SKU and foreign keys for performance optimization.


Missing Requirements:
Some important clarifications required from the product team:

- Can a product have multiple suppliers?
- How is low-stock threshold defined (fixed or dynamic)?
- How is "recent sales activity" determined?
- Are bundles static or dynamically generated?
- Should inventory changes be audited for compliance?
- Are price changes tracked historically?

Explanation:

The schema is designed to be scalable and flexible, supporting multi-warehouse inventory tracking and supplier relationships. It also considers real-world requirements such as audit logging and bundle management, making it suitable for a SaaS-based inventory system.
This design ensures scalability, data integrity, and flexibility, making it suitable for handling large-scale SaaS-based inventory systems.
