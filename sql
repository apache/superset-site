set hive.exec.dynamic.partition.mode=nonstrict;
INSERT OVERWRITE TABLE db_exports.superset_logs_v01 PARTITION (ds)
SELECT id, action, user_id,
       json,
       dttm,
       dashboard_id,
       slice_id,
       dt,
       duration_ms,
       referrer,
       ds
FROM db_exports.panoramix_prod_logs_v01
WHERE ds >= '2017-08-01' aND ds <= '2017-08-10';
